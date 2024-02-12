import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:driver/state/bottom_nav_bar/bottom_nav_logic.dart';

class NavBarItem extends StatelessWidget {
  final int index;
  final String label;

  NavBarItem({
    Key? key,
    required this.index,
    required this.label,
  }) : super(key: key);

  final logic = Get.find<BottomNavLogic>();

  @override
  Widget build(BuildContext context) {
    ThemeData themeData = Theme.of(context);

    return GestureDetector(
      onTap: () => logic.changeTap(index),
      behavior: HitTestBehavior.translucent,
      child: Obx(
        () => Container(
          padding: EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
          decoration: BoxDecoration(
            color: logic.selectedTab == index
                ? Colors.green.withOpacity(0.2)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(12.0),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                index == 0 ? Icons.home : Icons.map,
                color: logic.selectedTab == index
                    ? Colors.green
                    : const Color(0xff929292),
              ),
              SizedBox(width: 8.0),
              Text(
                label,
                style: themeData.textTheme.bodyText1!.copyWith(
                  fontSize: 16,
                  color: logic.selectedTab == index
                      ? Colors.green
                      : const Color(0xff929292),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
