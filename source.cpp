// This program demonstrates the swapVars function template.
#include <iostream>
using namespace std;

// your code for the template function goes here 
template<typename MyType>
void swapVars(MyType &item1, MyType &item2) {
	MyType tempItem = item1;
	item1 = item2;
	item2 = tempItem;
}



int main()
{
   char firstChar, secondChar;       // Two chars
   int firstInt, secondInt;          // Two ints
   double firstDouble, secondDouble; // Two doubles

   // Get and swapVars two chars
   cout << "Enter two characters: ";
   cin >> firstChar >> secondChar;
   swapVars(firstChar, secondChar);
   cout << firstChar << " " << secondChar << endl;

   // Get and swapVars two ints
   cout << "Enter two integers: ";
   cin >> firstInt >> secondInt;
   swapVars(firstInt, secondInt);
   cout << firstInt << " " << secondInt << endl;

   // Get and swapVars two doubles
   cout << "Enter two floating-point numbers: ";
   cin >> firstDouble >> secondDouble;
   swapVars(firstDouble, secondDouble);
   cout << firstDouble << " " << secondDouble << endl;
   return 0;
}