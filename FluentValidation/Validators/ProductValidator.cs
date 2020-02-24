using FluentValidation;
using SomeDomain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SomeDomain.Validators
{ 
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(product => product.Name).MaximumLength(10);
            RuleFor(product => product.Description).MaximumLength(30);
        }
    }
}
