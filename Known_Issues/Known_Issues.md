### Known Issues 【已知问题】

#### Accumulation Buffer Projection Matrix【累积缓冲投影矩阵】

如果累积的“抗锯齿”选项被启用，并且场景中包含了Cinemachine的相机切换，那么相机的FOV将会在切换后变得不正确。

**解决方法**：在CinemachineBrain修改相机之后，每帧重置投影矩阵。

```csharp
public class FixProjection : MonoBehaviour
{
    void LateUpdate() 
    { 
        Camera.main.ResetProjectionMatrix(); 
    }
}
```