module.exports = {
    base: (req, res, next) => {
        res.status(200).json({
            data: {
                message: "This field is exist !",
                success: true,
            }
        })
    }
}
