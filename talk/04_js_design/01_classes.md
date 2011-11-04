!SLIDE purple

# JavaScript Design

!SLIDE

# You probably thought this
# presentation was about testing!

!SLIDE

![Chuck Testa](testa.jpeg)
# Nope!

!SLIDE

# Refactoring

!SLIDE

# Testing makes
# refactoring easier

!SLIDE

# Red – Green – Refactor

!SLIDE

# Unit testing

!SLIDE

# Unit

!SLIDE purple

# Our code needs more units!

!SLIDE

# In Ruby we have
# classes and modules

!SLIDE

# In JavaScript we have
# ???

!SLIDE

# We need to make
# our own structure

!SLIDE code small

    @@@javascript
    $('#whiskies li').each(function() {
      var li = $(this);
      var price = li.attr('data-price');
      var addLink = $('<a class="add-to-cart" href="#">Add to cart</a>');
      addLink.appendTo(li);

      addLink.click(function() {
        var item = $('<li>' + li.attr('data-name') + '</li>');
        item.appendTo('#cart .list');
        item.append('<span class="price">' + price + '</span>');
        var currentAmount = parseInt($('#cart .total .amount').text());
        var newAmount = currentAmount + parseInt(price);
        $('#cart .total .amount').text(newAmount);
        return false;
      });
    });

!SLIDE

# Untestable

!SLIDE

![John Resig](resig.png)
# It's all jQuery's fault

!SLIDE

## ”jQuery is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.”

!SLIDE

# jQuery is a DSL for DOM manipultion
## (and it's brilliand at that)

!SLIDE

# We need something more!

!SLIDE blue

# Possible solutions
## Function-style
## JS prototypes
## MooTools
## CoffeeScript Classes
## Backbone.js
## (SproutCore)

!SLIDE

# Function-style

!SLIDE code small

    @@@javascript
    var Cart = function(element) {
      var self = {}
      var element = $(element);
      var list = this.element.find('.list');
      var total = this.element.find('.total .amount');
      var items = [];

      self.addItem = function(item) {
        element = $('<li>' + item.name + '<span class="price">' +
          item.price + '</span></li>').appendTo(this.list);
        items.push({ name: item.name, price: item.price, });
        self.updateTotal();
      };

      self.updateTotal = function() {
        sum = 0;
        $(items).each(function() { sum += this.price });
        self.total.text(sum);
      };

      return self;
    };

!SLIDE

# Pro
## No dependencies
## Truly hidden state

!SLIDE

# Con
## Becomes messy
## Still too unstructured
## Still tricky to test
## Yum memory!

!SLIDE

# JS prototypes

!SLIDE code small

    @@@javascript
    var Cart = function(element) {
      this.element = $(element);
      this.list = this.element.find('.list');
      this.total = this.element.find('.total .amount');
      this.items = [];
    };

    Cart.prototype.addItem = function(item) {
      element = $('<li>' + item.name + '<span class="price">' +
        item.price + '</span></li>').appendTo(this.list);
      this.items.push({ name: item.name, price: item.price, });
      this.updateTotal();
    };

    Cart.prototype.updateTotal = function() {
      sum = 0;
      $(this.items).each(function() { sum += this.price });
      this.total.text(sum);
    };

!SLIDE

# Pro
## No extra dependencies
## Memory efficient
## Easy to test
## Good structure

!SLIDE

# Con
## Ohh god my eyes
## So much typing ☹

!SLIDE

# MooTools classes

!SLIDE code small

    @@@javascript
    var Cart = new Class({
      initialize: function(element) {
        this.element = element;
        this.list = this.element.getElement('.list');
        this.total = this.element.getElement('.total .amount');
        this.items = [];
      },
      addItem: function(item) {
        element = new Element('li', { text: item.name }).inject(this.list);
        new Element('span', { className: 'price', test: item.name }).inject(element);
        this.items.push({ name: item.name, price: item.price });
        this.updateTotal();
      },
      updateTotal: function() {
        sum = this.items.sum(function(item) { item.price });
        this.total.text(sum);
      }
    })

!SLIDE

# Pro
## Nicer syntax
## Extensible
## Easy to test
## MooTools is awesome

!SLIDE

# Con
## Have to use MooTools
## JSON strucure as class is a bit ugly

!SLIDE

# CoffeeScript classes

!SLIDE code small

    @@@ruby
    class Cart
      constructor: (@element) ->
        @list = this.element.getElement('.list')
        @total = this.element.getElement('.total .amount')
        @items = []

      addItem: (item) ->
        element = new Element('li', text: item.name).inject(@list)
        new Element('span', className: 'price', test: item.name).inject(element)
        @items.push(name: item.name, price: item.price)
        @updateTotal()

      updateTotal: ->
        @total.text @items.sum((item) -> item.price)

!SLIDE

# Pro
## CoffeeScript is super awesome
## It's really, really awesome
## No seriously

!SLIDE

# Pro
## CoffeeScript is super awesome
## Concise syntax
## Use whatever framework you want
## Compiles to clean JS Prototypes

!SLIDE

# Con
## Debugging is hard
## Need to be able to compile CoffeeScript

!SLIDE

# Backbone.js

!SLIDE code small

    @@@ruby
    class Item extends Backbone.Model

    class Cart extends Backbone.Collection
      model: Item

    class CartItemView extends Backbone.View
      model: Item
      tagName: 'li'

      render: ->
        $(@el).append("#{@model.name} <span class='price'>#{@model.price}</span>")

    class CartView extends Backbone.View
      collection: Cart

      initialize: ->
        @list = $(@el).find('.list')
        @total = $(@el).find('.total')
        @collection.bind 'change', =>
          @updateTotal()
        @collection.bind 'add', item, =>
          @list.append(new CartItemView(item).render()

      updateTotal: ->
        @total.text @collection.sum((item) -> item.price)


!SLIDE

# Pro
## MV(C) Structure
## Easy to test
## Scales well

!SLIDE

# Con
## jQuery only
## Extra dependency
## Possibly overkill

!SLIDE purple

# tl;dw: structure!
