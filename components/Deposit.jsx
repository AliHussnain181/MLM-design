import React from 'react'

const Deposit = () => {

    const deposit = [
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
        { Date: "Jul 05, 2023", Transaction: "OXWUCVYKDIGO", method: "Flutterwave", account: "Jenifer", amount: "164428", status: "pending", theme: "" },
    ]

    return (
        <>
            <div className='scroll h-[80vh] w-[90%] sm:w-[80%] md:w-3/4 mx-auto mt-11 text-[#536479] block lg:hidden '>
                {deposit.map((d) =>
                    <div key={d.account} className='h-52 w-[100%] px-2 text-[14px] bg-[#FFFFFF] space-y-2 rounded-g[1px]'>
                        <tr className='flex justify-between mt-5 '>
                            <td>Date</td>
                            <td>{d.Date}</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td>Transaction Number</td>
                            <td>{d.Transaction}</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td>Method</td>
                            <td>{d.method}</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td>Account Name</td>
                            <td>{d.account}</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td>Amount</td>
                            <td>{d.amount}</td>
                        </tr>
                        <tr className='flex justify-between'>
                            <td>Status</td>
                            <td className='bg-[#EE9B00] text-black text-[11px] flex items-center px-2 py-[1px] rounded-3xl '>{d.status}</td>
                        </tr>
                    </div>
                )}
            </div>
            <div className='hidden lg:block'>
                <table className='my-12 w-[86%] xl:w-[82%] mx-auto '>
                    <thead className='h-14 bg-[#3D065F] text-white w-full'>
                        <tr>
                            <th>Date</th>
                            <th>Transaction Number</th>
                            <th>Method</th>
                            <th>Account Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {deposit.map((d) =>
                        <tbody key={d.account}>
                            <tr className='text-center h-14 bg-white text-[#536479] text-[14.3px] border-gray-200 border-b-[1px]'>
                                <td>{d.Date}</td>
                                <td>{d.Transaction}</td>
                                <td>{d.method}</td>
                                <td>{d.account}</td>
                                <td>{d.amount}</td>
                                <td className='bg-[#EE9B00] text-black text-[11px] flex  justify-center items-center mt-5 px-2 py-[1px] w-16  m-auto rounded-3xl' >{d.status}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </>
    )
}

export default Deposit