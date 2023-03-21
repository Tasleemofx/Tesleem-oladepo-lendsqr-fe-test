export interface UserObj{
    createdAt: String,
        orgName: String,
            userName: String,
                email: String,
                    phoneNumber: String,
                        lastActiveDate: String,
                            profile: {
        firstName: String,
            lastName: String,
                phoneNumber: String,
                    avatar: String
                        gender: String,
                            bvn: String,
                                address: String,
                                    currency: String
    },
    guarantor: {
        firstName: String,
            lastName: String,
                phoneNumber: String,
                    gender: String,
                        address: String
    },
    accountBalance: String,
        accountNumber:String,
            socials: {
        facebook: String,
            instagram: String,
                twitter: String
    },
    education: {
        level: String,
            employmentStatus: String,
                sector:String,
                    duration: String,
                        officeEmail: String,
                            monthlyIncome: [
                                String,
                                String
                            ],
                                loanRepayment: String
    },
    id: String
}

export interface RespData{
    data: UserObj[],
    isLoading: boolean,
    error: Error
}