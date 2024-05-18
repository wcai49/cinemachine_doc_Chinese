export const code = `
public class FixProjection : MonoBehaviour
{
    void LateUpdate() 
    { 
        Camera.main.ResetProjectionMatrix(); 
    }
}
`;
