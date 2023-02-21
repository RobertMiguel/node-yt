const validateTitle = (req, res, next) => {
    const { body } = req
    if(body.title == indefined) {
        return res.status(400).json({ message : 'The field "title" is required' })
    }
    if(body.title == '') {
        return res.status(400).json({ message : 'title cannot be empyt' })
    }
    next()
}

const validateFieldsStatus = (req, res, next) => {
    const { body } = req
    if(body.title == indefined) {
        return res.status(400).json({ message : 'The field "title" is required' })
    }
    if(body.title == '') {
        return res.status(400).json({ message : 'title cannot be empyt' })
    }
    next()
}

module.exports = {
    validateFieldsStatus,
    validateTitle
}