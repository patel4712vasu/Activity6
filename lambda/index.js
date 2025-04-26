exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from CIS470 Activity 6!'),
    };
    return response;
};
