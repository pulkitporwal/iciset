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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                    {/* Contact Details */}
                    <div className="bg-gray-50 p-6 rounded-2xl shadow space-y-4">
                        <h3 className="text-lg font-semibold">Contact Details</h3>
                        <p>
                            <span className="font-medium">Email:</span>{" "}
                            conference@iciset2026.org
                        </p>
                        <p>
                            <span className="font-medium">Phone:</span> +91-123-456-7890
                        </p>
                        <p>
                            <span className="font-medium">Address:</span> Amity University
                            Rajasthan, Jaipur, India
                        </p>
                    </div>

                    {/* Contact Form */}
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
            </TextSection>
        </div>
    );
};

export default ContactUs;
