# 使用Cinemachine

当使用Cinemachine时，你需要换一个新的思维方式去调试camera。 例如，你有可能曾经在编写用于控制camera行为的script上投入了大量精力，花费了很多的时间；而使用Cinemachine可以在更短的时间内提供同样的结果。

## Virtual Cameras （虚拟摄像机）

Cinemachine不会去创建一个新的camera。相反，它的原理是指导Unity的camera去拍摄不同的摄像角度，开发者通过Virtual cameras来完成这些组合拍摄的效果，而非创造很多个camera出来。Virtual camera会移动和旋转Unity的camera，并且控制Unity camera的相关设置。
