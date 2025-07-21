'use client';

import { motion } from 'framer-motion';

export default function Education() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* BTech */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">B.Tech - Computer Engineering</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Don Bosco College of Engineering, Goa <br />
                            2022 – Present, CGPA - 7.98
                        </p>
                    </motion.div>

                    {/* HSSC */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Higher Secondary (HSSC)</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Shree Damodar Higher Secondary School of Science<br />
                            2020 – 2022
                        </p>
                    </motion.div>

                    {/* SSC */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Secondary (SSC)</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Bhatikar Model High School<br />
                            2010 – 2020
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
