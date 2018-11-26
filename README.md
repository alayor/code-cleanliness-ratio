

Code Cleanliness Ratio (CCR) is the total number of `Domain Words` found in a 
software code repository divided by the total number of words
in the repository.

Most of the time software projects are filled up with words and sentences that just 
don’t help with figuring out what the projects are actually about.

Some examples of these words are: `for`, `if`, `util`, `service`,
`processor`, `String`, `int`, and many more.

These words make it difficult to find out the intention of the project.

For instance, it's more clear to see code like this:

```java
Invoice.ifItWasPaid().then().sendToCustomer()
```

than to see this:

```java
public static void main(String args...) {
  Invoice inv = new Invoice(input)
  boolean wasPaid = inv.wasPaid
  if (boolean) {
    inv.sendToCustomer()
  }
}
```

The formula to calculate the Code Cleanliness Ratio is:


CCR = &#x2211;DW / &#x2211;W


where &#x2211;DW is the number of words that belong in the `Domain Words`
category and &#x2211;W is the total number of words.

We consider "words" as all the variables, signs,
file names, folder names, etc.

The `Domain Words` are the words related to the domain of the
software application or solution.

Examples of `Domain Words` in a Travel Software Application are:

* `Flight`
* `Origin`
* `Destination`
* `Reservation`
* `Booking`
* `Check-in Date`
* `Check-out Date`

Naturally, we do need to write language-specific words like `if`, `for`, `while`, etc. in order
to build our system. However, we can sometimes hide them behind reusable libraries.

Let's calculate the CCR of our previous code. 

Suppose the `Domain Words` are the following:

* `Invoice`
* `Paid`
* `Send`
* `Customer`

Let's analyze the first example.

```java
Invoice.ifItWasPaid().then().sendToCustomer()
```

If we consider camel case names as separate words, the Total Words &#x2211;W 
would be <b>9</b>. (`Invoice`,`If`,`It`,`Was`,`Paid`,`then`,`send`,`To`,`Customer`) 

Given that only `Invoice`, `It`, `Send`, and `Customer` are
`Domain Words` the &#x2211;DW would be <b>4</b>.

So, the Code Cleanliness Ratio of this code is

```javascript
CCR = 4 / 9 = 0.44444
```

Let's analyze our second example using the same Domain Words list...


```java
public static void main(String args...) {
  Invoice inv = new Invoice(input)
  boolean wasPaid = inv.wasPaid
  if (boolean) {
    inv.sendToCustomer()
  }
}
```

In this example, &#x2211;DW is <b>6</b> and &#x2211;W is <b>23</b>.

So, the Code Cleanliness ratio of this code is

```javascript
CCR = 6 / 23 = 0.26086
```

We can improve the CCR of our latest code by changing the 
variable name `inv` to `invoice`, resulting in &#x2211;DW = <b>9</b> 
which would result in a CCR of `0.391304`

```javascript
CCR = 9 / 23 = 0.391304
```

## License

Copyright (c) 2014-2018 Alonso A. Ortega

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so. The Software doesn't include files with .md extension.
That files you are not allowed to copy, distribute, modify, publish, or sell.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
