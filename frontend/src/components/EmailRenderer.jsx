export const EmailRenderer = ({ email }) => {
    console.log("email renderer got hit")
    // Format date
    const receivedAt = new Date(email.createdAt);
    const receivedDate = receivedAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const receivedTime = receivedAt.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <div className="flex flex-col justify-center">
            <div className="bg-slate-100 rounded-lg bg-white w-full text-center p-2 my-3 h-auto h-max px-4">
                
                <div className="text-lg font-bold mb-2 flex justify-start">Subject: {email.subject}</div>
                <div className="text-gray-800 mb-2 flex justify-start font-serif text-xl">Body: {email.data}</div>
                <div className="flex justify-between">
                <div className="text-lg font-bold mb-2">From: {email.from}</div>
                <div className="text-sm text-gray-500 mb-2">Received at: {receivedTime} on {receivedDate}</div>
                </div>
            </div>
        </div>
    );
}
