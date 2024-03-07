//
//  SplashScreen.h
//
//  Created by Vimal Bhaktwarti on 3/10/23.
//
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>
@interface SplashScreen : NSObject<RCTBridgeModule>
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;
@end
