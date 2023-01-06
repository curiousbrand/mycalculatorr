import "./Input.css"

export default function Input({text,result}) {
    return (
        <div className="display">
            <div className="result"> {result? <span>({result})</span> : ""} </div>

            <div className="inputText">{text || "0"}</div>
        </div>    
         
    )
}