import { Note } from '../src/js/note.js'

describe('Note', () => {
    test("Note should instantiate Note Object", () => {
        const noteOne = new Note("C", "#");
        expect(noteOne.selectedNote).toBe("C");
        expect(noteOne.modifier).toBe("#");
    })
})