import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Throwback Hip Bag",
        href: "#",
        color: "Salmon",
        price: "$90.00",
        quantity: 1,
        imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        imageAlt:
            "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
        id: 2,
        name: "Medium Stuff Satchel",
        href: "#",
        color: "Blue",
        price: "$32.00",
        quantity: 1,
        imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
        imageAlt:
            "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
];

export default function CheckOut() {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className='mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            <div className='col-span-3'>
                <form className='bg-neutral-50 px-5'>
                    <div className='space-y-12'>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Address</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Choose from Existing Address
                            </p>

                            <div className="mt-10 space-y-10">
                                {/* <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">By email</legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        defaultChecked
                                                        id="comments"
                                                        name="comments"
                                                        type="checkbox"
                                                        aria-describedby="comments-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">
                                                    Comments
                                                </label>
                                                <p id="comments-description" className="text-gray-500">
                                                    Get notified when someones posts a comment on a posting.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        aria-describedby="candidates-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="candidates" className="font-medium text-gray-900">
                                                    Candidates
                                                </label>
                                                <p id="candidates-description" className="text-gray-500">
                                                    Get notified when a candidate applies for a job.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        aria-describedby="offers-description"
                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-sm/6">
                                                <label htmlFor="offers" className="font-medium text-gray-900">
                                                    Offers
                                                </label>
                                                <p id="offers-description" className="text-gray-500">
                                                    Get notified when a candidate accepts or rejects an offer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset> */}

                                <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">Payment Method</legend>
                                    <p className="mt-1 text-sm/6 text-gray-600">Choose One .</p>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                defaultChecked
                                                id="cash"
                                                name="payments"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label htmlFor="cash" className="block text-sm/6 font-medium text-gray-900">
                                                Card Payment
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="card"
                                                name="payments"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label htmlFor="card" className="block text-sm/6 font-medium text-gray-900">
                                                Cash Payment
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="push-nothing"
                                                name="payments"
                                                type="radio"
                                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                            />
                                            <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                                                Online Payment
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>


                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
                                                                  {/* Cart Component */}
            <div className='col-span-2'>
                <>
                    <div>
                        <div className="mx-auto bg-neutral-100 mt-max-w-7xl px-4 sm:px-8 lg:px-8">
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <h1 className="text-4xl font-bold tracking-tight my-5 text-gray-900 text-center">Cart</h1>
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex py-6">
                                                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        alt={product.imageAlt}
                                                        src={product.imageSrc}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href={product.href}>{product.name}</a>
                                                            </h3>
                                                            <div className="ml-4">{product.price}</div>
                                                        </div>
                                                        <div className="mt-1 text-sm text-gray-500">
                                                            <select>
                                                                <option value="red">Red</option>
                                                                <option value="salmon">Salmon</option>
                                                            </select>
                                                            {/* {product.color} */}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-1 items-end mt-1 justify-between text-sm">
                                                        <div className="text-gray-500">
                                                            <label
                                                                htmlFor="quantity"
                                                                className="inline text-sm/6 font-medium text-gray-900 mr-5"
                                                            >
                                                                Qty
                                                            </label>
                                                            <select>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                    Shipping and taxes calculated at checkout.
                                </p>
                                <Link to='/CheckOut'>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                </Link>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <div>
                                        or{" "}
                                        <Link to="/">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
        </div>
    );
}