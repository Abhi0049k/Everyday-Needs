import { FC } from "react"

const Footer: FC = () => {
    return (
        <>
            <footer>
                <div className="flex lg:flex-row flex-col lg:h-[310px] border-t border-b">
                    <div className="p-5 flex lg:w-[70%] justify-around border-r leading-6">
                        <div className="w-[26%]">
                            <h3 className="mb-1 text-xl font-bold">KNOW US</h3>
                            <p className="text-lg">About Everyday Needs</p>
                            <p className="text-lg">Blog</p>
                        </div>
                        <div className="w-[26%]">
                            <h3 className="mb-1 text-xl font-bold">HELPDESK</h3>
                            <p className="text-lg">Terms Of Use</p>
                            <p className="text-lg">Warranty Policy</p>
                            <p className="text-lg">Shipping Policy</p>
                            <p className="text-lg">Cancellation Policy</p>
                            <p className="text-lg">Return and Exchange Policy</p>
                            <p className="text-lg">Privacy & Security Policy</p>
                        </div>
                        <div className="w-[26%]">
                            <h3 className="mb-1 font-bold text-xl">NETWORK</h3>
                            <p className="text-lg">Contact Us</p>
                            <p className="text-lg">Corporate Gifting</p>
                        </div>
                    </div>
                    <div className="lg:w-[30%] h-full flex lg:flex-col justify-center">
                        <div className="p-5 lg:h-2/4 flex flex-col justify-evenly w-2/4 lg:w-full border-t lg:border-0">
                            <h1 className="text-2xl font-bold">FOLLOW US ON</h1>
                            <div className="flex gap-2 flex-wrap">
                                <img src="https://images.dailyobjects.com/marche/icons/social/instagram.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                                <img src="https://images.dailyobjects.com/marche/icons/social/facebook.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                                <img src="https://images.dailyobjects.com/marche/icons/social/youtube.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                                <img src="https://images.dailyobjects.com/marche/icons/social/twitter.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                                <img src="https://images.dailyobjects.com/marche/icons/social/pinterest.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                            </div>
                        </div>
                        <div className="border-t p-5 lg:h-2/4 flex flex-col justify-evenly w-2/4 lg:w-full">
                            <h1 className="text-2xl font-bold">DOWNLOAD OUR APP</h1>
                            <div className="flex gap-2 flex-wrap">
                                <img src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" alt="img" />
                                <img src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-[35px] flex flex-col justify-center">
                    <h4 className="text-lg font-semibold text-center">100% SECURE PAYMENT</h4>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                        <img src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1" alt="img" />
                    </div>
                </div>
                <div className="bg-black text-white p-8">
                    <p>&copy; 2023-2024 Mangalam Wholesale Pvt. Ltd.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
