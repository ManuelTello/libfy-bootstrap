import "react"

// eslint-disable-next-line react/prop-types
export default function MainPort({children}){
    return <main className="col bg-secondary-subtle rounded-3 ms-3 p-3">
        {children}
    </main>
}