import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_instance/src/bindings_interface.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:sizer/sizer.dart';

import 'package:driver/pages/main_scree.dart';
import 'package:driver/pages/onboarding_screen.dart';
import 'package:driver/pages/Screens/Welcome/welcome_screen.dart';
import 'package:driver/pages/constants.dart';
import 'package:driver/state/bottom_nav_bar/bottom_nav_logic.dart';
import 'package:driver/state/contract/contract_logic.dart';
import 'package:driver/state/home/home_logic.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Sizer(builder: ((context, orientation, deviceType) {
      return GetMaterialApp(
        title: 'Courier app',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        initialBinding: InitBinding(),
        home: const WelcomeScreen(), // Change MainScreen to SplashScreen
      );
    }));
  }
}

class InitBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut(() => BottomNavLogic());
    Get.lazyPut(() => HomeLogic());
    Get.lazyPut(() => ContractLogic());
    Get.lazyPut<MainScreen>(() => MainScreen()); // Add this line
  }
}
