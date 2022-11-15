const noteDataJson = localStorage.getItem('notes') || '[]';
const noteData = JSON.parse(noteDataJson);


window.addEventListener('unload', () => {
    const noteDataJson = JSON.stringify(noteData);
    localStorage.setItem('notes', noteDataJson);
});

export default noteData;