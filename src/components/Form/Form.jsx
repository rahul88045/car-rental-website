import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `Name: ${name}%0APhone: ${phone}%0ACountry: ${country}%0AFrom: ${cityFrom}%0ATo: ${cityTo}%0ADate: ${date}%0ATime: ${time}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=7909096151&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
        <span id="booking"></span>
        <div className="container">
            <form className="flex flex-col flex-grow ml-30" onSubmit={handleSubmit}>
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{10}"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="1234567890"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Vechile Type
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="MUV">MUV</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="city-from" className="block text-sm font-medium leading-6 text-gray-900">
                            From
                        </label>
                        <div className="mt-2">
                            <select
                                id="city-from"
                                name="city-from"
                                autoComplete="city-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={cityFrom}
                                onChange={(e) => setCityFrom(e.target.value)}
                            >
                                <option value="Dhanbad">Dhanbad</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Jamshedpur">Jamshedpur</option>
                                <option value="Bokaro">Bokaro</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Other">Other (Please mention in message)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="city-to" className="block text-sm font-medium leading-6 text-gray-900">
                            To
                        </label>
                        <div className="mt-2">
                            <select
                                id="city-to"
                                name="city-to"
                                autoComplete="city-to-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={cityTo}
                                onChange={(e) => setCityTo(e.target.value)}
                            >
                                <option value="Dhanbad">Dhanbad</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Jamshedpur">Jamshedpur</option>
                                <option value="Bokaro">Bokaro</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Other">Other (Please mention in message)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                            Date
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="sm:col-span-4">
                        <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                            Time
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
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
                        Send via WhatsApp
                    </button>
                </div>
            </form>
        </div>
        </>
        
    );
}