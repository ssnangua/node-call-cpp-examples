#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
  double left = atof(argv[1]);
  double right = atof(argv[2]);
  printf("%f", left + right);
  return 0;
}
