#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
  int left = atoi(argv[1]);
  int right = atoi(argv[2]);
  printf("%d", left + right);
  return 0;
}
