/* Helper de troca de tipagem */

export type Replace<T, R> = Omit<T, keyof R> & R;
