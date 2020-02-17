# TTCool
> * 用机翻英文写readme是因为比较酷，毕竟技术不够，逼格来凑（手动滑稽）<br>
> * 使用之前一定要仔细看看注意事项喔🥰<br>
> * Before you can run this script, you need to install a new version of Chrome.🌮<br>
> * And install the entire project folder into your Chrome as an extension.🍜<br>
> * After logging into "The Smart Tree", the script will run automatically.🐣<br>
> * The details of how to install the extended video teaching are covered in the perhaps-yo's project, so I won't go into details here.Thank perhaps-yo so much.😆

# About
1) This is the JS script that I reconstructed from @perhaps-yo's script because of the learning task assigned by the school.💁<br>
2) And the name of the project comes from my pet name for someone I like in our school.🥰<br>
3) The author of this script @AlanG/MatthewAlan0.🤣<br>
4) Inspiration for this script comes from @perhaps-yo,and the website of inspiration project @https://github.com/perhaps-yo/zhihuishu/commits?author=perhaps-yo ,And thank perhaps-yo again.😛

# Attention
1) If you want to use the automatic login feature, manually enter your account in advance in line 451 of the js file named "TTCool. js" and your password in line 452.🐵<br>
2) Second, you should select the type of class you want to attend in line 19 of the "TTCool. js" source code.🐣<br>
3) What's more, you should select the speed which you want to TT controls the video player in line 27 of the "TTCool. js" source code, if you don't change it, it will always be 1.5 times.🙊<br>
4) When you notice that the playback speed is increased to 1.5x, the volume is turned off, and the sharpness is adjusted to the minimum, you'd better not make any unnecessary movements in the video interface. Otherwise, the script will run abnormally.😁

# TTCool2.3.1 update (Delete)
Chrome extension
> You can now install the extension more easily by simply installing the file named "TTCool.crx" in Chrome.🥰

# TTCool2.3.0 update
Play Speed limit
> I've now implemented somthing that wasn't in the previous 2.2.0 update, which is breaking the speed limit of the video player, and now you can play at any speed you choose, even 16 times (max).(I certainly don't recommend it.)😛

# TTCool2.2.1 update
Meet class
> It took me an hour to add the ability for TT to watch meeting class.🙈

# TTCool2.2.0(Test records) update
Play speed limit
> I wanted to break the playback speed limit to a maximum of 3 times, but because of the uuid limit, this has not been implemented for the time being.😤

# TTCool2.1.0 update
1) Automatic login
> Solves some interface jump after automatic login Bug.🍖
2) Page jump
> Has solved some interface problems.🥩
3) Timing
> Solves the problem that functions cannot be properly called due to time initialization problems or logic problems.🐵
4) Code adjustment
> * Adjusts JS code style, complies with Google specification and improves readability.🙉<br>
> * Part of logic block optimization, reduce the coupling between logic blocks and blocks, reduce the probability of Bug.🐷

# TTCool2.0 update
1) Automatic login
> * After each jump page refresh, check at the login screen.🥫<br>
> * In the login screen when TT will now be sent through a POST request, to plans to build FORM FORM submitted to simulate a user login.🌮<br>
> * Solve the Bug of every time giving a jump site require log back in and stuck TT's action.🍜 

2) Process warning information
> Solved the Bug of after each login again into the video page, because the warning message stuck TT's action.🧐 

3) Page jump
> Add a several page jump and operating norms, make the TT know what time what place should do something, to prevent because page jump, and flexible enough to tackle the problem of jump TT script stops caused by wrong.😛

4) Unable to start
> Solve various about cannot be started, logic errors and other bugs.💁

5) Source code formatting and specification
> Specification of the original TT chaotic code, enhance readability.🙊
