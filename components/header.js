import Link from 'next/link'
import { useCart } from 'react-use-cart'
import Image from 'next/image'

import { formatCurrencyValue } from '@/utils/format-currency-value'
import { HygraphSVG } from '@/svgs'
import { ShoppingCartIcon } from '@/icons'
import { useSettingsContext } from '@/context/settings'
import CarouselComp from '@/components/ui/CarouselComp';
// import { thumb1 } from '@/public/thumb1.jpg'

function Header({ pages = [] }) {
  const { cartTotal } = useCart()
  const { activeCurrency } = useSettingsContext()

  return (
    <div className="">
      <header className="max-w-7xl mx-auto  flex-grow flex items-center justify-between px-4 sm:px-6">
        <div className="py-6 w-full">
          <nav className="flex items-center justify-between flex-wrap space-x-4">
         
            <Link href="/">
              <Image
                src="/media/logowomen.png"
                width="150"
                height="150"
                alt="title"
                title="title"
              />
            </Link>
            <Link
              href={`/`}
              className="text-black text-4xl hover:text-slategray hover:bg-gainsboro rounded-full pt-5  pr-[40px] font-medium"
            >
              Le Jardin <br />
              De La Sorciere
            </Link>

            {pages.length ? (
              <ul className="hidden md:mx-auto md:block md:flex-grow">
                {pages.map((page) => (
                  <li
                    key={page.id}
                    className="block my-4 md:inline-block md:my-0"
                  >
                    <Link
                      href={`/${page.type.toLowerCase()}/${page.slug}`}
                      className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex items-center">
              <Link href="/cart" className="flex space-x-2">
                <ShoppingCartIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-900">
                  {formatCurrencyValue({
                    currency: activeCurrency,
                    value: cartTotal
                  })}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="relative w-full h-[60vh] overflow-hidden">
      <CarouselComp />
        {/* <Image
          src="/media/banner3.jpg"
          fill
          alt="title"
          title="title"
          className="object-cover"
        /> */}
        
      </div>
    </div>
  )
}

export default Header
