"use client";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

import { useTheme } from "next-themes";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-7.75 w-12.75 bg-black ${isSelected ? "bg-white shadow-[0_0_12px_#FFFF0080]" : ""}`}
                    >
                        <Switch.Thumb
                            className={`size-6.75 bg-yellow-200 border border-yellow-500 shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                        >
                            <Switch.Icon>
                                {isSelected ? (
                                    <Sun className="size-4 text-yellow-700" />
                                ) : (
                                    <Moon className="size-4 text-yellow-700" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
}