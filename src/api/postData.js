const postData = async (values) => {
    await fetch(process.env.REACT_APP_API_URL,
    {
        method: 'POST',
        body: JSON.stringify(
            {
                "userId": 1,
                "title": values.title,
                "body": values.body    
            }
        ),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
}

export default postData