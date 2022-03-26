### 关于Cinemachine
![Cinemachine](https://github.com/wcai49/cinemachine_doc_Chinese/blob/main/Figures/Cinemachine_Intro.png)

Cinemachine是Unity中用于控制操作camera的一系列模块。它可以用于解决为了实现关于镜头间的目标跟踪、组合、协调、和切换效果而产生的复杂数学和逻辑问题。一句话描述来说，Cinemachine就是为显著减少开发过程中，手动调试和修改unity脚本（script）所耗费的大量时间而生的。

Cinemachine的程序性使得其在使用过程中不易产生bug。当你在调试过程中——例如，改变你Scene中的一个animation，载具速度，地面，或是其他GameObject时——Cinemachine会通过动态调整它的行为，来获得最好的镜头效果（注：例如，当你移动到墙边时，它会自动调整camera位置，避免穿墙或其他影响游戏性的问题）。假如你的人物的动作由之前的向右转变成了向左转，你也不需要重新为camera编写新的script脚本。

Cinemachine 适用于所有类型的游戏，包括， 第三人称射击，2D， 横板过关，3/4视角，和RTS游戏。无论你的游戏里需要多少种视角，它都可以胜任。它的模块化系统让你可以自己组合各种复杂的camera动作和行为。

Cinemachine与Unity的其他工具的兼容性很好，可以作为时间轴、动画、和后期处理等assets的补充。你也可以创造自己的插件、或是编写自定义的camera script后与之配合使用。



### 安装Cinemachine

Cinemachine是完全免费的。和其他package安装的过程一样，在Unity-> Window-> package manager中搜索Cinemachine，就可以下载安装至你的项目中。



安装成功后，在Project窗口的package文件夹中会出现一个新的Cinemachine文件夹；在顶部的菜单中，也会出现一个新的Cinemachine菜单；在Hierarchy视图中右键单击时，~~也可以访问此菜单~~（存疑，本人的Unity2020.3.26f版本中没有此特性）。

<p>
<img alt="Cinemachine in Project Gizmos folder" src="https://github.com/wcai49/cinemachine_doc_Chinese/blob/main/Figures/project_gizmos_folder.png" width="250" height="280">
<img alt="Cinemachine in menu" src="https://github.com/wcai49/cinemachine_doc_Chinese/blob/main/Figures/Cinemachine_window_menu.png" width="200" height="220" >
</p>

### 相关要求

Cinemachine没有额外的依赖，只需要安装并使用即可。



如果你正在使用PostProcessing Stack（Version2）这个package，我们也提供了相应的转换模块——通过ifdef指令保护这个过程，当检测到Post Processing Stack时，该指令就会自动启用。



类似ifdef保护类指令的还有很多，用于其他packages的调整优化， 例如HDRP Volumes， Timeline， 和Pixel-Perfect等。



当前版本的Cinemachine适用于以下版本的Unity引擎：

-         2019.4 或更新版本



### 通过CinemachineAsset Package升级

如果你已经从UnityAsset Store安装了Cinemachine，那么你可以将其升级为Cinemachine Package。

升级的步骤：

1.   在Unity引擎（2018.4.17f1或更新的版本）中，打开你的项目；

2.   保存你当前的Scene，以免丢失；

3.   创建一个新的、空的Scene；

4.   在Project窗口中，删除Cinemachine Asset和任何你可能安装的适配CinemachinePostProcessing的asset文件夹；

5.   安装Cinemachine package。
