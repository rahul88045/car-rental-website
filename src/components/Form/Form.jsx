import React from "react";

export default function Form() {
    return (
        <div className="container">
            <form className="flex flex-col flex-grow ml-30">
                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Country
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>MUV</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            From
                        </label>
                        <div className="mt-2">
                            <select
                                id="city-from"
                                name="city-form"
                                autoComplete="city-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Dhanbad</option>
                                <option>Ranchi</option>
                                <option>Jamshedpur</option>
                                <option>Bokaro</option>
                                <option>Kolkata</option>
                                <option>Other (Please mention in message)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            To
                        </label>
                        <div className="mt-2">
                            <select
                                id="city-to"
                                name="city-to"
                                autoComplete="city-to-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Dhanbad</option>
                                <option>Ranchi</option>
                                <option>Jamshedpur</option>
                                <option>Bokaro</option>
                                <option>Kolkata</option>
                                <option>Other (Please mention in message)</option>
                            </select>
                        </div>
                    </div>

                </div>



                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Date
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                                <input
                                    type="date"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Time
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                                <input
                                    type="time"
                                    name="username"
                                    id="username"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold 
                        text-white shadow-sm 
                        hover:bg-indigo-500 
                        focus-visible:outline 
                        focus-visible:outline-2 
                        focus-visible:outline-offset-2
                         focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>

        </div>
    )
}

// export default Form;

