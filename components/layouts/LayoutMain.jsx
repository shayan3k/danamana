import React from 'react'


function LayoutMain(props) {
    return (
        <div id='application'>
            {/* Header */}
            {/* Siderbar */}

            <main id='base-content'>
                {props.children}
            </main>

            {/* Footer */}
        </div>
    )
}

export default LayoutMain
