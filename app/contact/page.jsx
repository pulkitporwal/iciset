"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import TextSection from "../../components/text";

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xeolbywz");

    return (
        <div className="px-4 sm:px-6 lg:px-10 py-5">
            <TextSection title="Contact Us">
                <p>
                    Have any questions or need assistance? Feel free to reach out to us
                    using the form below, or contact us directly via the provided details.
                </p>

                <div className="flex justify-center items-center flex-col gap-8 mt-6">
                    <div className="p-6 rounded-2xl shadow space-y-4">
                        <h3 className="text-lg font-semibold">Contact Details</h3>
                        <div class="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <h2 class="text-xl font-semibold text-[#005B96] mb-2">
                                Amity University Jaipur Campus
                            </h2>
                            <p class="text-gray-600 leading-relaxed">
                                SP-1, Kant Kalwar, RIICO Industrial Area, NH-11C, Jaipur, Rajasthan <br />
                                <span class="font-medium text-gray-800">Tel:</span> 01426-405678
                                <span class="text-sm text-gray-500">(University Board Number - For general queries only)</span>
                            </p>
                        </div>
                        <div class="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <h2 class="text-xl font-semibold text-[#005B96] mb-2">
                                Amity University Jaipur City Office
                            </h2>
                            <p class="text-gray-600 leading-relaxed">
                                Amity House, C - 119, Lal Kothi Scheme, Behind Vidhan Sabha, Jaipur - 302 015 (Rajasthan) <br />
                                <span class="font-medium text-gray-800">Tel:</span> 0141-4735000, 2744350
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow"
                        >
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
                                    placeholder="Subject"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500"
                                    rows={4}
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-[#005B96] text-white py-2 px-4 rounded-lg hover:bg-[#005a96df] transition"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </button>

                            {state.succeeded && (
                                <p className="text-green-600 mt-2">
                                    ✅ Your message has been sent successfully!
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </TextSection>
        </div>
    );
};

export default ContactUs;
