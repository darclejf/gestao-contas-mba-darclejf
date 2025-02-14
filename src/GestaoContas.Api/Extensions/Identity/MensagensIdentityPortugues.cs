﻿using Microsoft.AspNetCore.Identity;

namespace GestaoContas.Api.Extensions.Identity
{
    public class MensagensIdentityPortugues : IdentityErrorDescriber
    {
        //TODO: Adicionar os demais erros
        public override IdentityError DefaultError() { return new IdentityError { Code = nameof(DefaultError), Description = "Ocorreu um erro desconhecido" }; }
        public override IdentityError PasswordRequiresUpper() { return new IdentityError { Code = nameof(PasswordRequiresUpper), Description = "A senha deve conter ao menos uma letra maiúscula" }; }    
        public override IdentityError PasswordRequiresLower(){return new IdentityError{Code = nameof(PasswordRequiresLower), Description = "A senha deve conter ao menos uma letra minúscula"};}
        public override IdentityError PasswordRequiresDigit(){return new IdentityError{Code = nameof(PasswordRequiresDigit),Description = "A senha deve conter ao menos um número"};}
        public override IdentityError PasswordRequiresNonAlphanumeric(){return new IdentityError{Code = nameof(PasswordRequiresNonAlphanumeric),Description = "A senha deve conter ao menos um caractere especial"};}
        public override IdentityError PasswordTooShort(int length){return new IdentityError{Code = nameof(PasswordTooShort),Description = $"A senha deve ter no mínimo {length} caracteres"};}
    }
}
