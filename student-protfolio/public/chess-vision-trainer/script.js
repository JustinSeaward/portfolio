// Author: Justin Seaward
// Description: A basic chess app at the moment. Im hoping to add different modes: One to help visulise the piece movement on the board. One to learn how to set up the board for new players.
// Date: Dec 22, 2025

// Define the board.
const board = document.getElementById("board");

// Define a 2D array for the starting position of the pieces on the board.
const startingPosition = [
  ["rd", "nd", "bd", "qd", "kd", "bd", "nd", "rd"],
  ["pd", "pd", "pd", "pd", "pd", "pd", "pd", "pd"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

// for loop to create the board.
// Loop eight rows
for (let row = 0; row < 8; row++) {
  // Loop eight columns
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");

    // Determine where each piece is on the board.
    const piece = startingPosition[row][col];

    // Checking if there is a piece on a square.
    if (piece !== "") {
      // Create an img tag for the piece image.
      const pieceImage = document.createElement("img");

      // Set source for the piece image.
      pieceImage.src = `imgs/${piece}.svg`;

      // Adds the piece type as the ID (row,col).
      pieceImage.id = piece;

      // Place image on the sqaure.
      square.appendChild(pieceImage);
    }

    // If statement to determine light or dark square.
    if ((row + col) % 2 === 1) {
      square.classList.add("dark");
    } else {
      square.classList.add("light");
    }
    square.classList.add("square");

    square.dataset.row = row;
    square.dataset.col = col;

    board.appendChild(square);

    // Click event handler for squares.
    square.addEventListener("click", () => {
      const highlightedSquare = document.querySelector(".highlight");

      // Function to validate moves for each piece.
      function validMoves(pieceType, startSquare, endSquare) {
        const startRow = parseInt(startSquare.dataset.row);
        const startCol = parseInt(startSquare.dataset.col);
        const endRow = parseInt(endSquare.dataset.row);
        const endCol = parseInt(endSquare.dataset.col);
        // Move logic for rook.
        if (pieceType === "R" || pieceType === "rd") {
          if (startRow === endRow || startCol === endCol) {
            return true;
          } else {
            return false;
          }
          // Move logic for bishop.
        } else if (pieceType === "B" || pieceType === "bd") {
          if (Math.abs(startRow - endRow) === Math.abs(startCol - endCol)) {
            return true;
          } else {
            return false;
          }
        }
        // Move logic for white pawns.
        // Checking if the white pawn is on its starting sqaure for its double jump.
        else if (
          pieceType === "P" &&
          startRow === 6 &&
          startRow - endRow === 2 &&
          startCol === endCol
        ) {
          return true;
        }
        // Normal move logic for white pawn.
        else if (
          pieceType === "P" &&
          startRow - endRow === 1 &&
          startCol === endCol
        ) {
          return true;
        }
        // Logic for white pawn capture.
        else if (
          pieceType === "P" &&
          startRow - endRow === 1 &&
          Math.abs(startCol - endCol) === 1 &&
          endSquare.querySelector("img") !== null
        ) {
          return true;
        }
        // Checking if the black pawn is on its starting square for its double jump.
        else if (
          pieceType === "pd" &&
          startRow === 1 &&
          startRow - endRow === -2 &&
          startCol === endCol
        ) {
          return true;
          // Normal black pawn move logic.
        } else if (
          pieceType === "pd" &&
          startRow - endRow === -1 &&
          startCol === endCol
        ) {
          return true;
        } else if (
          pieceType === "pd" &&
          startRow - endRow === -1 &&
          Math.abs(startCol - endCol) === 1 &&
          endSquare.querySelector("img") !== null
        ) {
          return true;
        }
      }

      // If statement for which piece to move.
      if (highlightedSquare !== null && highlightedSquare !== square) {
        // Select the piece(img) to move.
        const pieceToMove = highlightedSquare.querySelector("img");

        // If statement to move a piece with rules.
        if (
          pieceToMove !== null &&
          validMoves(pieceToMove.id, highlightedSquare, square)
        ) {
          // Checking for a existing piece in the square.
          const capturePiece = square.querySelector("img");

          // If statement to capture a piece if one is on the square.
          if (capturePiece !== null) {
            square.removeChild(capturePiece);
          }
          // Move the new piece on the square
          square.appendChild(pieceToMove);
        }

        // Remove old highlighted square
        highlightedSquare.classList.remove("highlight");
      }
      square.classList.toggle("highlight");
    });
  }
}
