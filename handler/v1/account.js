const prisma = require('../../helper/prisma')
const createAccount  = async(req,res,next) => {
    try {
        const { user_id, bank_name, bank_account_number, balance} = req.body;
        const account = await prisma.bank_accounts.create({
            data : {
                bank_name, bank_account_number, balance: Number(balance), user:{
                    connect: {id:user_id}
                }

            }
        })
        res.status(201).json({ success: true, message: 'Created', data: account });
    } catch (error) {
        next(error)
    }
}

const getAllaccounts = async(req,res,next) => {
    try {
        const accounts = await prisma.bank_accounts.findMany()
        res.status(200).json({ success: true, message: 'OK', data: accounts });
    } catch (error) {
        next(error)
    }
}

const getDetailAccount = async(req,res,next) => {
    try {
        const {accountID}= req.params
        const account = await prisma.bank_accounts.findUnique({
            where: {
                id: Number(accountID)
            }
        })
        if(!account) return res.status(404).json({ success: false, message: 'Not Found', data: null });
        res.status(200).json({ success: true, message: 'OK', data: account });
    } catch (error) {
        next(error)
    }
}

module.exports = {createAccount, getAllaccounts, getDetailAccount}