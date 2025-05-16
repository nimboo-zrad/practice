export const users = {
  username: {
    notEmpty: {
      errorMessage: "username must not be empty!"
    },
    isLength: {
      options: {min: 3, max: 30},
      errorMessage: 'username must be at least 3 characters and maximum 30 cahracters'
    },
    matches: {
      options: /^[a-z ]+$/,
      errorMessage: "username must be in lower case and not including number or special characters..."
    }
  }
}
