import { DATA_CATEGORY_HEADER } from "@/lib/constant";
import Link from "next/link";

const Header = ({ children, a }) => {

    return (
        <header>
            <div className="w-full bg-gray-200">
                <div className="max-w-6xl w-full mx-auto flex items-center space-x-3">
                    <div>
                        <p className="font-semibold">HỌC NEXTJS</p>
                    </div>
                    <div className="relative dropdown">
                        <p>Thể loại</p>
                        <div className="absolute hidden">
                            <ul className="bg-white w-80 py-2 px-2 shadow-sm rounded-b-md grid grid-cols-2">
                                {/* <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li>
                                <li className="hover:bg-gray-100 px-3 py-2 cursor-pointer">Truyen 1</li> */}
                                {
                                    DATA_CATEGORY_HEADER.map((item, index) => {
                                        return (
                                            <li key={index} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                                                <Link href={item.slug}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header;