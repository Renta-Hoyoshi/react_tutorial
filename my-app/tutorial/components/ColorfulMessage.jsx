export const ColorfulMessage = ({ color, children }) => {
    console.log("--ColorfulMessage--");
    const contentStyleA = {
        // プロパティ名と値が一緒の時は省略可
        color,
        fontSize: "18px",
    };
    return (
        <p style={contentStyleA}>{children}</p>
    )
};