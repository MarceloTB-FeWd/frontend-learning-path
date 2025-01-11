const faqItems = document.querySelectorAll('.faq-items');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.icon');

    question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');
        
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.faq-answer').forEach(a => (a.style.display = 'none'));
        document.querySelectorAll('.icon').forEach(i => (i.textContent = '+'));

        if (!isActive) {
            question.classList.add('active');
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});