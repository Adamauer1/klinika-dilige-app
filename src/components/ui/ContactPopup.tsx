"use client"
import { useState, useEffect } from 'react';
import styles from "@/components/styles/ContactPopup.module.css"
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal, Box, Group, Text, Title, Drawer, Stack, ThemeIcon } from '@mantine/core';
import { IconPhone, IconMail, IconUser, IconMapPin, IconChevronRight } from '@tabler/icons-react';
import { IconX } from "@tabler/icons-react"; // Import close icon

export default function ContactPopup() {
    //const [isOpen, setIsOpen] = useState(false);
    const [opened, setOpened] = useState(true);

    return (
        <>
            {/* Mantine Drawer (50% Height, Only Closes on "X" Button) */}
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="left"
                size="sm"
                withOverlay={false} // Remove click-outside behavior
                lockScroll={false}
                styles={{
                    body: { padding: "20px", position: "relative" },
                    header: { display: "none" },
                    content: {
                        borderRadius: "0 10px 10px 0",
                        height: "50vh", // Set height to 50%
                        top: "25vh", // Center vertically
                        position: "fixed",
                    },
                }}
                withCloseButton={false} // Remove default close button
            >
                {/* Custom Close "X" Button */}
                <Button
                    onClick={() => setOpened(false)}
                    variant="subtle"
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        padding: "5px",
                    }}
                >
                    <IconX size={24} />
                </Button>

                <h3>Contact Info</h3>
                <p>📧 email@example.com</p>
                <p>📞 (123) 456-7890</p>
            </Drawer>

            {/* Toggle Button (Hidden when Drawer is Open) */}
            {!opened && (
                <Button
                    onClick={() => setOpened(true)}
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "0",
                        transform: "translateY(-50%)",
                        borderRadius: "0 10px 10px 0",
                    }}
                >
                    Contact
                </Button>
            )}
        </>
        // <div className={styles.container}>
        //     {/* Contact Panel */}
        //     <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
        //         <h3>Contact Info</h3>
        //         <p>📧 email@example.com</p>
        //         <p>📞 (123) 456-7890</p>
        //     </div>
        //
        //     {/* Toggle Button */}
        //     <button
        //         className={`${styles.button} ${isOpen ? styles.buttonOpen : ""}`}
        //         onClick={() => setIsOpen(!isOpen)}
        //     >
        //         {isOpen ? "Close" : "Contact"}
        //     </button>
        // </div>
    )
}