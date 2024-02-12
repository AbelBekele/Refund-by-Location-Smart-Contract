import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get_state_manager/src/simple/get_controllers.dart';
import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:web_socket_channel/io.dart';
import 'package:permission_handler/permission_handler.dart';

class ContractLogic extends GetxController {
  static const String contractName = "PayByLocation";
  static const String ip = '127.0.0.1';
  static const String port = '8545';
  final String _rpcURL = "http://$ip:$port";
  final String _wsURL = "ws://$ip:$port/";
  final String _privateKey =
      "0x82552f5eC5A221d1aEb53cBB58B2c3A451440a3c";

  late Web3Client _client;
  late Credentials _credentials;
  late DeployedContract _contarct;
  late ContractFunction _evaluate;

  init(context) {
    initialize(context);
  }

  initialize(context) async {
    _client = Web3Client(_rpcURL, Client(), socketConnector: () {
      return IOWebSocketChannel.connect(_wsURL).cast<String>();
    });

    final abiStringFile = await DefaultAssetBundle.of(context)
        .loadString("../../smart_contract/truffle/build/contracts/PayByLocation.json");
    final abiJson = jsonDecode(abiStringFile);
    final abi = jsonEncode(abiJson['abi']);
    final contractAddress =
        EthereumAddress.fromHex(abiJson['networks']['5777']['address']);
    _credentials = EthPrivateKey.fromHex(_privateKey);
    _contarct = DeployedContract(
        ContractAbi.fromJson(abi, contractName), contractAddress);
    print('99999999999999999');
    print(_contarct.address);

    _evaluate = _contarct.function('evaluate');
  }

  Future getEvaluate({lat, long}) async {
    print("===================");
    var c = await _client.sendTransaction(
        _credentials,
        Transaction.callContract(
            contract: _contarct, function: _evaluate, parameters: [lat, long]));
    print(c);
  }

  void getLocation() async {
    final status = await Permission.location.request();
    if (status.isGranted) {
      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
      );

      var latitude = position.latitude;
      var longitude = position.longitude;

      getEvaluate(lat: BigInt.from(latitude), long: BigInt.from(longitude));
    } else if (status.isDenied) {
    } else if (status.isPermanentlyDenied) {
      // openAppSettings();
    }
  }
}
