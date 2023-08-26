export const numberRegExp = /[0-9]{1}/

export const nameRegExp = /^([A-Za-z]+)$/i

export const lowerCharacterRegExp = /[a-z]{1}/

export const upperCharacterRegExp = /[A-Z]{1}/

export const usRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/

export const canadaRegExp = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/

export const emailRegExp =
  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
