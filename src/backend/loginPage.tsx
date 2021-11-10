import "./loginPage.css"

function LoginPage() {
    return (
        <div className = "LoginPage">
            <table className = "logintable">
                <tbody>
                    <tr>
                        <th colSpan = {2} align = "center">please login the system</th>
                    </tr>
                    <tr>
                        <td colSpan = {2}>
                            <label>
                                username:
                                <input type = "text"></input>
                            </label>
                        </td>
                        <td><span className = "emptyusername">username shouldn't be none</span></td>
                    </tr>
                    <tr>
                        <td colSpan = {2}>
                            <label>
                                password:
                                <input type = "text"></input>
                            </label>
                        </td>
                        <td><span className = "emptypassword">password shouldn't be none</span></td>
                    </tr>
                    <tr>
                        <td><button>Login</button></td>
                        <td><a target = "_self" href = "https://www.baidu.com" rel = "next">Register a user</a></td>
                    </tr>
                </tbody>
            </table>      
        </div>
       
    )
}

export default LoginPage