import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:latlong2/latlong.dart';

class MapScreen extends StatelessWidget {
  final String accessToken = 'YOUR_ACCESS_TOKEN';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Map'),
        ),
        body: FlutterMap(
          options: MapOptions(
            initialCenter: LatLng(38.829004, -8.9956957),
            initialZoom: 9.2,
          ),
          children: [
            TileLayer(
              urlTemplate: "https://api.mapbox.com/styles/v1/"
                  "{id}/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWxtZWhkaXZvbiIsImEiOiJja3c3czdjYWcxMnI1MnFxbG1ubTZ6bGJiIn0.KvROk3IY0YX_Km0O2zB0Ww",
              userAgentPackageName: 'com.example.app',
              additionalOptions: {
                'accessToken':
                    "pk.eyJ1IjoiZWxtZWhkaXZvbiIsImEiOiJja3c3czdjYWcxMnI1MnFxbG1ubTZ6bGJiIn0.KvROk3IY0YX_Km0O2zB0Ww",

                'id':
                    'mapbox/streets-v11', // Replace with your desired map style
              },
            ),
            RichAttributionWidget(
              attributions: [
                TextSourceAttribution(
                  'OpenStreetMap contributors',
                  onTap: () => launchUrl(
                      Uri.parse('https://openstreetmap.org/copyright')),
                ),
              ],
            ),
          ],
        )
        );
  }
}
