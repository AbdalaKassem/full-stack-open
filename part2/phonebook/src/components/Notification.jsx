const Notification = ({ message, type }) => {
    if (message === null) 
        return null

    const notificationStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    
    if (type === 'err')
        notificationStyle.color = 'red'
    else 
        notificationStyle.color = 'green'

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification