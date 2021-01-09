import React from 'react'


function LayoutMain(props) {
    return (
        <div id='application'>
            {/* Header */}
            {/* Siderbar */}

            <main className="position-relative vh-100"  id='base-content'>
                {props.children}
            </main>

            {/* Footer */}
        </div>
    )
}

export default LayoutMain
