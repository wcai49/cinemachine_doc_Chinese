# Cinemachine_doc_Chinese

这个项目是关于Unity官方认证的package：Cinemachine(V2.8.9)的技术文档中文翻译。

This project is about Unity's official verified package: cinemachine's documentation translated in Chinese.

## 背景

本人作为Unity的业余爱好者，最近在研究Cinemachine相关的用法。最开始的时候，我尝试通过Youtube视频学习如何使用Cinemachine，我看了最经常关注的Youtuber： Brackeys的视频之后，发现对于此类的插件，仅仅观看视频跟着做很难学到其精髓、原理，从而导致每次再遇到相同的问题时，还是需要翻找视频跟着做一遍，这样不好。

因此，我查看了Unity官方关于Cinemachine的文档，发现目前只有英文版本。我本人阅读英文文档没有什么问题，但是为了照顾到更多的中文使用者更好地学习使用Cinemachine， 我决定花一些时间翻译这些文档，同时自我学习和补充相关的知识点。

由于我只是一个程序员，并非英语专业，因此可能会有一些翻译得不好的地方，还请各位多多指出，希望有更好见解的同学一起完善这个文档。



## 目录

<details>
  <summary> 
    关于Cinemachine
  </summary>

  * [关于Cinemachine](./About_Cinemachine/About_Cinemachine.md#关于cinemachine)
  * [安装Cinemachine](./About_Cinemachine/About_Cinemachine.md#安装cinemachine)
  * [相关要求](./About_Cinemachine/About_Cinemachine.md#相关要求)
  * [通过CinemachineAsset Package升级](./About_Cinemachine/About_Cinemachine.md#通过cinemachineasset-package升级)
</details>

<details>
  <summary> 
    使用Cinemachine
  </summary>

  * [使用Cinemachine](./Using_Cinemachine/Using_Cinemachine.md)
  * [Virtual Camera 虚拟摄像机](./Using_Cinemachine/Using_Cinemachine.md#virtual-cameras-虚拟摄像机)
  * [Cinemachine Brain](./Using_Cinemachine/Using_Cinemachine.md#Cinemachine-Brain)
  * [移动与对准](./Using_Cinemachine/Using_Cinemachine.md#移动与瞄准)
  * [构建一个镜头](./Using_Cinemachine/Using_Cinemachine.md#构建一个镜头)
  * [使用noise来模拟镜头晃动](./Using_Cinemachine/Using_Cinemachine.md#使用noise来模拟镜头晃动)
  
</details>

<details>
  <summary>
    使用虚拟摄像机VM
  </summary>
  
  ---
  在你的项目中，管理好你的Hierarchy面板，使之在只含有一个Unity自带的camera的同时（并添加CinemachineBrain component），可以拥有数个虚拟摄像机Virtual Camera（以下简称VM）。

  如何添加一个VM到Scene中：
  1. 在Unity的菜单中，选择GameObject > Cinemachine > Virtual Camera。
  Unity会自动生成一个GameObject，同时附加上Cinemachine Virtual Camera Component。如果这是你添加的第一个VM，那么Unity还会给场景中的Unity自带camera添加上Cinemachine Brain component。
  2. 设置VM的Follow属性，从而确定你要VM**跟随**的是场景中的哪个GameObject。
  VM会自动将Unity Camera永远定位到该GameObject相对应的位置上。甚至当你在调试游戏时的Scene窗口中拖动，它也会实时更新。
  3. 设置VM的LookAt属性，从而确定你要VM**对准**的是场景中的哪个GameObject。
  VM会自动旋转Unity Camera，使之保持面对该GameObject的位置。甚至当你在调试游戏时的Scene窗口中拖动，它也会实时更新。
  4. 根据自身需求，自定义VM的属性
  你可以自定义VM的跟随和对准的算法，也可以调整例如：跟随的偏差，跟随的阻尼感，屏幕的构图，和Camera重新瞄准时的阻尼感。

  * [设置VM的属性]()
</details>

## 官方文档地址

这里是官方的英文文档地址： https://docs.unity3d.com/Packages/com.unity.cinemachine@2.8/manual/index.html 。
