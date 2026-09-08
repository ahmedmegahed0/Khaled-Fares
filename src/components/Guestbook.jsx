export default function Guestbook() {
    const handleWishesSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = "SENDING...";
        btn.disabled = true;

        try {
            // Send the email via FormSubmit AJAX API
            await fetch("https://formsubmit.co/ajax/fawzymohamed2280@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name.value,
                    message: form.message.value
                })
            });

            btn.innerText = "THANK YOU!";
            btn.classList.replace('bg-[#1c2833]', 'bg-[#d4af37]');
            btn.classList.replace('text-[#d4af37]', 'text-[#1c2833]');

            // Trigger confetti effect simulation
            for (let i = 0; i < 50; i++) {
                const conf = document.createElement('div');
                conf.style.position = 'fixed';
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.top = '-10px';
                conf.style.width = '8px';
                conf.style.height = '8px';
                conf.style.backgroundColor = ['#d4af37', '#f8d8db', '#ffffff'][Math.floor(Math.random() * 3)];
                conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                conf.style.zIndex = '9999';
                conf.style.transition = `all ${Math.random() * 2 + 1}s ease-out`;
                document.body.appendChild(conf);

                setTimeout(() => {
                    conf.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
                    conf.style.opacity = '0';
                }, 50);

                setTimeout(() => conf.remove(), 3000);
            }

            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('bg-[#d4af37]', 'bg-[#1c2833]');
                btn.classList.replace('text-[#1c2833]', 'text-[#d4af37]');
                btn.disabled = false;
                form.reset();
            }, 3000);

        } catch (error) {
            console.error("Error sending message:", error);
            btn.innerText = "ERROR - TRY AGAIN";
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            }, 3000);
        }
    };

    return (
        <section className="py-stack-xl relative z-10" id="guestbook">
            <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
                <div className="reveal">
                    <h2 className="font-script text-6xl md:text-8xl mb-6 text-[#1c2833]">Wishes &amp; Love</h2>
                    <p className="font-serif-elegant text-xl italic mb-12 text-[#2c3e50]/80">Please leave a message for the happy couple. Your words of wisdom and love will be sent directly to our email to be cherished forever.</p>
                    
                    <form className="space-y-8 text-left" id="wishForm" onSubmit={handleWishesSubmit}>
                        <div className="relative">
                            <input name="name" className="w-full bg-transparent border-b-2 border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-0 transition-colors py-3 px-0 font-handwriting text-3xl md:text-4xl placeholder:font-serif-elegant placeholder:text-xl placeholder:text-[#2c3e50]/30 text-[#1a365d] tracking-wide" placeholder="Your Name" required type="text" />
                        </div>
                        <div className="relative">
                            <textarea name="message" className="w-full bg-transparent border-b-2 border-[#d4af37]/40 focus:border-[#d4af37] focus:ring-0 transition-colors py-3 px-0 font-handwriting text-3xl md:text-4xl placeholder:font-serif-elegant placeholder:text-xl placeholder:text-[#2c3e50]/30 text-[#1a365d] tracking-wide resize-none leading-relaxed" placeholder="Your Message" required rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <button className="py-3 px-10 bg-[#1c2833] text-[#d4af37] border border-[#d4af37]/30 rounded-sm font-label-caps text-xs tracking-[0.3em] shadow-lg hover:bg-[#2c3e50] transition-colors" type="submit">SEAL WITH LOVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
