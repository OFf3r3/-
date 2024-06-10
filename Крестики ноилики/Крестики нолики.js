class TicTacToe {
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
    }

    printBoard() {
        console.log('-------------');
        for (let i = 0; i < 3; i++) {
            console.log(`| ${this.board[i][0]} | ${this.board[i][1]} | ${this.board[i][2]} |`);
            console.log('-------------');
        }
    }

    checkWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
                return true;
            }
            if (this.board[0][i] !== '' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
                return true;
            }
        }
        if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            return true;
        }
        if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
            return true;
        }
        return false;
    }

    play(row, col) {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            this.printBoard();
            if (this.checkWinner()) {
                console.log(`Player ${this.currentPlayer} wins!`);
                return;
            }
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        } else {
            console.log('This cell is already occupied. Try again.');
        }
    }
}

const game = new TicTacToe();
game.printBoard();

game.play(0, 0);
game.play(1, 1);
game.play(0, 1);
game.play(1, 0);
game.play(0, 2);
game.play(2, 2);