import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Trade Platform</h1>
                <nav>
                    {/* Navigation Links */}
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;